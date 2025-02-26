import { useEffect, useState } from "react";
import { idGenerator } from "shared/lib/utils";
import { ITagTodo } from "shared/ui/Boxes";

export const useTagsForm = () => {
  const [value, setValue] = useState<string>("");
  const [tags, setTags] = useState<ITagTodo[]>([]);

  const initialTags = (tags: ITagTodo[]) => {
    setTags(tags)
  }

  const onCreateNewTag = () => {
    console.log(tags)
    setTags([...tags, { color: "white", title: value === "" ? "Default tag" : value, id: idGenerator() }]);
    setValue("");
  };

  const onChangeColor = (color: string, id: string) => {
    const updatedTags = tags.map((tag) => (tag.id === id ? { ...tag, color } : tag));

    setTags([...updatedTags]);
  };

  const onRemoveTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return {
    value,
    setValue,
    tags,
    initialTags,
    onCreateNewTag,
    onChangeColor,
    onRemoveTag,
  }
};
