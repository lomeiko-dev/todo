import { Box } from "@mui/material"
import classNames from "classnames"
import { ITodo, todoSelector } from "entities/todo"
import { TodoEdit } from "features/todo-form"
import { useAppSelector } from "shared/lib/hooks"
import { IDefaultComponentsProps } from "shared/types/props.types"

interface IProps extends IDefaultComponentsProps{
    children: React.ReactNode
    onAddedTodo: (section: string, todo: ITodo) => void,
    lazy: boolean
}

export const TodoWrap: React.FC<IProps> = (props) => {
    const {children, className, styleCSS, onAddedTodo, lazy} = props

    const sections = useAppSelector(todoSelector.selectAll)

    const hanldeCreateTodo = (todo: ITodo) => {
        onAddedTodo("new-todo", todo)
    }

    return(
        <Box className={classNames(className)} sx={styleCSS}>
            {sections.length === 0 && lazy ? <TodoEdit onAddedTodo={hanldeCreateTodo}/> : null}
            {children}
        </Box>
    )
}