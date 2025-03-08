import { Box } from "@mui/material"
import classNames from "classnames"
import { ITodo, todoSelector } from "entities/todo"
import { TodoEdit } from "features/todo-form"
import { ViewToggle } from "features/view-toggle"
import { useEffect, useState } from "react"
import { useAppSelector } from "shared/lib/hooks"
import { IDefaultComponentsProps } from "shared/types/props.types"

interface IProps extends IDefaultComponentsProps{
    children: React.ReactNode
    onAddedTodo: (section: string, todo: ITodo) => void
}

export const TodoWrap: React.FC<IProps> = (props) => {
    const {children, className, styleCSS, onAddedTodo} = props

    const [lazy, setLazy] = useState(false)

    const sections = useAppSelector(todoSelector.selectAll)

    useEffect(() => {
        setLazy(true)
    }, [])

    const hanldeCreateTodo = (todo: ITodo) => {
        onAddedTodo("new-todo", todo)
    }

    return(
        <Box className={classNames(className)} sx={styleCSS}>
            {sections.length === 0 && lazy ? <TodoEdit onAddedTodo={hanldeCreateTodo}/> : null}
            <ViewToggle alignment="list" onAction={() => null}/>
            {children}
        </Box>
    )
}