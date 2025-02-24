import { Box, Button, Modal, Typography } from "@mui/material";
import { TodoDetail } from "entities/todo/ui/Todo.detail";
import { TodoItem } from "entities/todo/ui/Todo.item";
import React from "react";
import { Layout } from "widgets/layout";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '800px',
    bgcolor: "background.paper",
    p: 4,
    borderRadius: 1,
  };
  return (
    <div>
      <Layout>
        <TodoItem
          todo={{
            title: "Новая задача",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error debitis ipsam sequi natus velit sed libero maiores veniam asperiores cupiditate repellat quaerat quis atque voluptatibus nulla facilis consectetur enim?",
            id: "1",
            dateCreated: "02.24.2025",
            dateUpdated: "",
            deadline: "02.24.2025",
            isCompleted: false,
            priority: "p3",
            tags: [
              { color: "blue", title: "front-end" },
              { color: "red", title: "hot" },
              { color: "green", title: "fix" },
            ],
          }}
        />

        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TodoDetail todo={{
            title: "Новая задача",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error debitis ipsam sequi natus velit sed libero maiores veniam asperiores cupiditate repellat quaerat quis atque voluptatibus nulla facilis consectetur enim?",
            id: "1",
            dateCreated: "02.24.2025",
            dateUpdated: "",
            deadline: "02.24.2025",
            isCompleted: false,
            priority: "p3",
            tags: [
              { color: "blue", title: "front-end" },
              { color: "red", title: "hot" },
              { color: "green", title: "fix" },
            ],
          }}/>
          </Box>
        </Modal>
      </Layout>
    </div>
  );
};

export default HomePage;
