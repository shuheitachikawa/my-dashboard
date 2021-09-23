import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { TodoGroup, TodoStatus, Todo } from 'API';

interface ComponentProps {
  todoGroup: TodoGroup;
  doneTodos: Todo[];
  onToggleTodoStatus: (
    todoGroupId: string,
    todoIndex: number,
    todoStatus: TodoStatus
  ) => void;
  onDeleteTodo: (todoGroupId: string, todoIndex: number) => void;
}

type Props = ComponentProps;

const DoneTodoListView = styled.ul`
  margin: 0;
  margin-top: 8px;
  padding: 0;
  li {
    word-break: break-all;
    padding: 0px 4px;
    list-style: none;
    color: gray;
    display: flex;
    align-items: top;
    justify-content: space-between;
    font-size: 15px;
    .back-icon {
      cursor: pointer;
      margin-left: 2px;
    }
  }
`;

export const DoneTodoList: React.FC<Props> = ({
  todoGroup,
  doneTodos,
  onToggleTodoStatus,
  onDeleteTodo
}) => {
  return (
    <DoneTodoListView>
      {doneTodos.map((todo, i) => {
        return (
          <li key={`todo-${i}`}>
            <span>{todo.title}</span>
            <div className="">
              <ArrowUpwardIcon
                className="back-icon"
                onClick={() =>
                  onToggleTodoStatus(todoGroup.id, todo.index, todo.status)
                }
              />
              <CloseIcon
                className="close-icon"
                onClick={() => onDeleteTodo(todoGroup.id, todo.index)}
              />
            </div>
          </li>
        );
      })}
    </DoneTodoListView>
  );
};
