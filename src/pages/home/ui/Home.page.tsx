import { Layout } from "widgets/layout";
import "./style.scss";
import { loadFromLocalStorage, saveToLocalStorage, todoSelector } from "entities/todo";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { TodoSectionList, TodoViewActions } from "widgets/todo-view";
import { TodoEditWidget } from "widgets/todo-form";
import { SectionEditWidget } from "widgets/section-form";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const HomePage = () => {
  const sections = useAppSelector(todoSelector.selectAll);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const eventUnload = () => {
      dispatch(saveToLocalStorage())
    }
    
    dispatch(loadFromLocalStorage())
    window.addEventListener('unload', eventUnload)

    return () => {
      window.removeEventListener('unload', eventUnload)
    }
  }, [])

  return (
    <Layout styleCSS={{padding: '20px 0'}}>
      <Typography textAlign={'center'} variant="h3" color="secondary">Todo</Typography>
      <TodoViewActions styleCSS={{marginTop: '15px'}} alignment="list" onAction={() => null}/>
      <TodoEditWidget />
      <TodoSectionList sections={sections} />
      <SectionEditWidget/>
    </Layout>
  );
};

export default HomePage;
