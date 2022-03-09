import React from "react";
import CompletedTodoItem from "./CompletedTodoItem";

function CompletedTodoList(props) {
  return (
    <ol className="list-task">
      {props.taskList
        .filter((task) => {
          if (task.completed) {
            return true;
          }
          return false;
        })
        .map((task) => {
          return (
            <CompletedTodoItem
              theme={props.theme}
              task={task}
              taskList={props.taskList}
              setTaskList={props.setTaskList}
            />
          );
        })}
    </ol>
  );
}

export default CompletedTodoList;
