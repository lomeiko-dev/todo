import { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import { Box, Button, Divider, IconButton, InputBase, List, ListItem, Paper, Stack } from "@mui/material";
import { TagsEditor, PriorityEditor, DateCalendar } from "./components";
import { ListProperties } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { typeFormInput } from "../model/type";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {}

export const TodoEdit: React.FC<IProps> = (props) => {
  const { className, styleCSS } = props;
  const [fullForm, setFullForm] = useState(false);
  const { control, handleSubmit, watch } = useForm<typeFormInput>({defaultValues: {
    tags: []
  }});

  const toggleWrapForm = () => {
    setFullForm(!fullForm);
  };

  const onSubmit: SubmitHandler<typeFormInput> = (data) => {
    console.log(data);
  };

  const mods = {
    ["hiden"]: !fullForm,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames(mods)}>
      <Paper className={classNames(className, "paper")} sx={styleCSS} elevation={4}>
        <Box className="head">
          <Stack className="todo-title">
            <Controller
              name="title"
              control={control}
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
        <Divider className="todo-edit-devider" />
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
