import { useState } from "react";
import { idGenerator } from "shared/lib/utils";
import { ITag } from "shared/ui/boxes";

export const useTagsForm = (onChange: (tags: ITag[]) => void, tags: ITag[]) => {
  const [value, setValue] = useState<string>("");

  const onCreateNewTag = () => {
    const newTags = [...tags, { color: "white", title: value === "" ? "Default tag" : value, id: idGenerator() }];
    setValue("");
    onChange(newTags);
  };

  const onChangeColor = (color: string, id: string) => {
    const updatedTags = tags.map((tag) => (tag.id === id ? { ...tag, color } : tag));
    onChange(updatedTags);
  };

  const onRemoveTag = (id: string) => {
    const newTags = tags.filter((tag) => tag.id !== id);
    onChange(newTags);
  };

  return {
    value,
    setValue,
    tags,
    onCreateNewTag,
    onChangeColor,
    onRemoveTag,
  };
};
