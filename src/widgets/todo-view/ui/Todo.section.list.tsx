import classNames from "classnames";
import { List, ListItem } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ISectionTodos, SectionItem } from "entities/todo";
import { TodoList } from "./Todo.list";
import { BaseActions } from "shared/components/actions";

interface IProps extends IDefaultComponentsProps {
  sections: ISectionTodos[];
}

export const TodoSectionList: React.FC<IProps> = (props) => {
  const { sections, className, styleCSS } = props;

  return (
    <List className={classNames(className)} style={styleCSS}>
      {sections.map((section) => (
        <ListItem>
          <SectionItem actionSlot={<BaseActions onEdit={() => null} onRemove={() => null} />} name={section.title}>
            <TodoList todos={section.todos} />
          </SectionItem>
        </ListItem>
      ))}
    </List>
  );
};
