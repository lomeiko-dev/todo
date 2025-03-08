import classNames from "classnames";
import "./style.scss";
import { idGenerator } from "shared/lib/utils";
import { Box, IconButton, InputBase, Paper, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISectionTodos } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { typeFormSectionInput } from "../model/type";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

interface IProps extends IDefaultComponentsProps {
  onAddedSection: (section: ISectionTodos) => void;
  initialSection?: ISectionTodos;
  onClose: () => void;
  isChanged?: boolean;
}

export const SectionEdit: React.FC<IProps> = (props) => {
  const { className, styleCSS, onAddedSection, onClose, initialSection, isChanged } = props;

  const { register, handleSubmit } = useForm<typeFormSectionInput>({ defaultValues: { name: initialSection?.title } });

  const onSubmit: SubmitHandler<typeFormSectionInput> = (data) => {
    onAddedSection({
      id: initialSection === undefined ? idGenerator() : initialSection.id,
      title: data.name,
      todos: initialSection === undefined ? [] : initialSection.todos,
    });
    onClose()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames(className, "hiden")} style={styleCSS}>
      <Paper className="todo-edit">
        <Box className="todo-edit-head">
          <Stack className="todo-title">
            <InputBase
              {...register("name", { required: true })}
              className="input-name"
              fullWidth
              placeholder="New section"
              id="outlined-basic"
            />

            <Stack className="todo-manage">
              <IconButton type="submit" color="primary">
                {isChanged ? <CheckIcon /> : <AddIcon />}
              </IconButton>
              <IconButton onClick={onClose} size="small" color="default">
                <CloseIcon sx={{ width: "16px" }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </form>
  );
};
