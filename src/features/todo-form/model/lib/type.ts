import { ITag } from "shared/ui/boxes";

export interface ITagsFormProps {
  onChange: (tags: ITag[]) => void;
  tags: ITag[];
}
