import React from "react";
import Add from "./todo/add";
import List from "./todo/list";

const Dashboard = ({ data, onAdd }) => {
    return (
        <div role="main" className="container p-2">
            <Add onAddClick={onAdd} /><hr />
            <div className="row">
                <div className="col-8 offset-2">
                    <List data={data} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;