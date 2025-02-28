import { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import { Box, Button, Divider, IconButton, InputBase, List, ListItem, Paper, Stack } from "@mui/material";
import { TagsEditor, PriorityEditor, DateCalendar } from "./components";
import { ITodo, ListProperties } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { typeFormTodoInput } from "../model/type";
import { idGenerator } from "shared/lib/utils";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {
  onAddedTodo: (todo: ITodo) => void;
}

export const TodoEdit: React.FC<IProps> = (props) => {
  const { className, styleCSS, onAddedTodo } = props;

  const [fullForm, setFullForm] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<typeFormTodoInput>({
    defaultValues: {
      tags: [],
    },
  });

  const toggleWrapForm = () => {
    setFullForm(!fullForm);
  };

  const onSubmit: SubmitHandler<typeFormTodoInput> = (data) => {
    onAddedTodo({ id: idGenerator(), dateCreated: "", dateUpdated: "", isCompleted: false, ...data });
    reset({
      title: "",
      description: "",
      tags: [],
      deadline: undefined,
      priority: undefined,
    });
  };

  const mods = {
    ["hiden"]: !fullForm,
  };

  const modsPaper = {
    ["todo-edit-error"]: errors.title,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames('todo-form', mods)}>
      <Paper className={classNames(className, "todo-edit", modsPaper)} sx={styleCSS} elevation={4}>
        <Box className="todo-edit-head">
          <Stack className="todo-title">
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputBase {...field} className="input-name" fullWidth placeholder="Task name" id="outlined-basic" />
              )}
            />

            <Stack className="todo-manage">
              <IconButton type="submit" color="primary">
                <AddIcon />
              </IconButton>
              <IconButton onClick={toggleWrapForm} color="secondary">
                <MoreHorizIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <InputBase
                {...field}
                className="input-descr"
                multiline
                fullWidth
                maxRows={10}
                placeholder="description"
                id="outlined-basic"
                size="small"
              />
            )}
          />
          <ListProperties
            className="todo-edit-list-properties"
            deadline={watch("deadline")}
            priority={watch("priority")}
            tags={watch("tags")}
          />
        </Box>
        <Divider className="todo-edit-devider"/>
        <Stack className="properties-manage">
          <List className="properties-list">
            <ListItem className="properties-list-item">
              <Controller name="deadline" control={control} render={({ field }) => <DateCalendar {...field} />} />
            </ListItem>
            <ListItem className="properties-list-item">
              <Controller
                name="priority"
                control={control}
                render={({ field }) => <PriorityEditor onSelect={field.onChange} prioritySelect={field.value} />}
              />
            </ListItem>
            <ListItem className="properties-list-item">
              <Controller
                name="tags"
                control={control}
                render={({ field }) => <TagsEditor onChange={field.onChange} valueTags={field.value || []} />}
              />
            </ListItem>
          </List>
          <Stack className="todo-manage">
            <Button size="small" variant="contained" color="error">
              Back
            </Button>
            <Button type="submit" size="small" variant="contained" color="primary">
              Create
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </form>
  );
};
