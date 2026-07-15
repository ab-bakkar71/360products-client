"use client";

import { deleteProduct } from "@/lib/action/action";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface DeleteProductProps {
  id: string;
}

const DeleteProduct = ({ id }: DeleteProductProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const result = await deleteProduct(id);

      if (result.success) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Failed to delete product");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger" isIconOnly>
        <RiDeleteBin6Line size={18} />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Product?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This product will be permanently deleted. This action cannot be
                undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                slot="close"
                variant="danger"
                onPress={handleDelete}
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteProduct;