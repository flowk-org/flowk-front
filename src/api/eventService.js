import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export const createEventClient = (onMessage) => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        debug: (str) => console.log('STOMP Debug:', str),
    });

    stompClient.onConnect = () => {
        console.log('STOMP-соединение установлено');
        stompClient.subscribe('/topic/app', (message) => {
            try {
                const event = JSON.parse(message.body);
                onMessage(event);
            } catch (error) {
                console.error('Ошибка обработки STOMP-сообщения:', error);
            }
        });
    };

    stompClient.onStompError = (frame) => {
        console.error('Ошибка STOMP:', frame);
    };

    return stompClient;
};
