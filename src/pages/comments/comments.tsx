import CardComments from "@/components/comment/card-comments";
import CreateComment from "@/components/comment/create-comment";
import EditCommentCard from "@/components/comment/edit-comment-card";
import LayoutPage from "@/layouts/layout-page";
import { Comments } from "@/utils/apis/comments";
import { getComments } from "@/utils/apis/comments/api";
import { useEffect, useState } from "react";

export default function ListComments() {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getComments();
      setComments(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayoutPage>
      <h1 className="text-center pt-10">Comments</h1>
      <EditCommentCard/>
      {comments.map((comment) => (
        <CardComments data={comment} />
      ))}
      <CreateComment />
    </LayoutPage>
  );
}
