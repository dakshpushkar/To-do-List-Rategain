import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ol className="list-task">
      {props.taskList
        .filter((task) => {
          if (!task.completed) {
            return true;
          }
          return false;
        })
        .map((task) => {
          return (
            <TodoItem
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

export default TodoList;
