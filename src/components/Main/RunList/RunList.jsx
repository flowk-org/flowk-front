import React from 'react';
import Run from '../Run/Run';
import "./RunList.css"
import {Badges} from "./Badges";
import Stage from "../Pipeline/Stage/Stage";

const RunList = () => {
    const runs = [
        {
            id: 1,
            date: '2023-10-01 14:30',
            status: 'Завершен',
            stages: [
                { name: 'Начало', isCompleted: true },
                { name: 'В процессе', isCompleted: true },
                { name: 'Завершен', isCompleted: true },
            ],
        },
        {
            id: 2,
            date: '2023-10-02 09:15',
            status: 'В процессе',
            stages: [
                { name: 'Начало', isCompleted: true },
                { name: 'В процессе', isCompleted: false },
                { name: 'Завершен', isCompleted: false },
            ],
        },
    ];

        return (
            <div className="box">
                <div className="order-list">
                    <div className="overlap">
                        <div className="bg" />

                        <div className="ID">Data Preparation</div>

                        <div className="rectangle" />

                        <div className="div" />

                        <div className="rectangle-2" />

                        <div className="rectangle-3" />

                        <div className="rectangle-4" />

                        <div className="ID-status">
                            <div className="overlap-group">
                                <div className="ID-2">Running</div>

                                <div className="overlap-2">
                                    <div className="text-wrapper-2">ID</div>

                                    <Badges
                                        className="badges-instance"
                                        color="info"
                                        divClassName="design-component-instance-node"
                                        style="pill"
                                        text="#9"
                                        variant="fill"
                                    />
                                </div>

                                <div className="ID-3">Feb 15, 21:02</div>
                            </div>

                            <div className="overlap-3">
                                <div className="ID-4">Failure</div>

                                <div className="ID-5">Feb 15, 14:45</div>
                            </div>

                            <div className="overlap-group-2">
                                <div className="ID-6">Success</div>

                                <div className="ID-7">Feb 15, 14:45</div>
                            </div>
                        </div>

                        <div className="text-wrapper-3">8s</div>

                        <Badges
                            className="badges-2"
                            color="success"
                            divClassName="design-component-instance-node"
                            style="pill"
                            text="#8"
                            variant="fill"
                        />
                        <Badges
                            className="badges-3"
                            color="success"
                            divClassName="design-component-instance-node"
                            style="pill"
                            text="#7"
                            variant="fill"
                        />
                        <div className="ID-8">Model Training</div>

                        <div className="ID-9">Model Training</div>

                        <div className="ID-10">Deploy to Prod</div>

                        <div className="ID-11">Deploy to Dev</div>
                    </div>
                </div>
            </div>
        );
    };

//     return (
//         <div style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
//             {runs.map((run) => (
//                 <Run
//                     key={run.id}
//                     id={run.id}
//                     date={run.date}
//                     status={run.status}
//                     stages={run.stages} // Передаем этапы
//                 />
//             ))}
//         </div>
//     );
// };

export default RunList;