"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

const EditCarrierPage = () => {
  const router = useRouter();
  const {id} = useParams();
  return (
    <>
      {id !== "new" ? "EDIT" : "ADD"} Client
      <Button
        onClick={() => {
          router.back();
        }}
      >
        Cancel
      </Button>
    </>
  );
};
export default EditCarrierPage;
