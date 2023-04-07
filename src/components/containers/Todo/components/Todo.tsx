import React, { FC } from "react";

const Task: FC = () => {
  return (
    <div className="bg-white w-[550px] h-[550px] pt-5 rounded-sm">
      {/* Header Task */}
      <div className="w-full px-7 flex items-center justify-between">
        <select name="task" id="task" className="border-2 rounded px-2 py-1">
          <option value="all" selected>
            All
          </option>
          <option value="team">Team</option>
          <option value="myTask">My Task</option>
        </select>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          New Task
        </button>
      </div>
      {/* Header Task End */}

      {/* Body Task */}
      <section className="w-full px-7 my-7">
        <details>
          <summary>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" name="task" id="task" />
                <p>hao</p>
              </div>
            </div>
          </summary>

          <p>halooooooo</p>
        </details>
      </section>
      {/* Body Task End */}
    </div>
  );
};

export default Task;
