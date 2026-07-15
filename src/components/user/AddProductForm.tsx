"use client";
import { ProductInput, User } from "@/interfaces/interfaces";
import { addProduct } from "@/lib/action/action";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaCloudUploadAlt,
  FaDollarSign,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

type AddProductFormProps = {
  user: User | null; // আপনার User টাইপ import করে নিন
};

const AddProductForm = ({user}: AddProductFormProps) => {
  console.log(user);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const router = useRouter()

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File exceeds 2MB limit.");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddProduct = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  const productData = Object.fromEntries(formData.entries());

  let imageUrl = "";

  if (imageFile) {
    try {
      const imgbbFormData = new FormData();
      imgbbFormData.append("image", imageFile);

      const imgbbResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
        {
          method: "POST",
          body: imgbbFormData,
        }
      );

      const imgbbResult = await imgbbResponse.json();

      if (imgbbResult.success) {
        imageUrl = imgbbResult.data.url;
      } else {
        toast.error("Failed to upload image.");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("ImgBB upload connection error.");
      setLoading(false);
      return;
    }
  }


  const productPayload : ProductInput = {
    title: productData.title as string,
    shortDescription: productData.shortDescription as string,
    fullDescription: productData.fullDescription as string,
    price: Number(productData.price),
    category:productData.category as string,
    location: productData.location as string,
    image: imageUrl,
    userName: user?.name as string,
    userEmail: user?.email as string
  }

  const response = await addProduct(productPayload);
  console.log( "Your Backend Server Response:", response);
  if(response.insertedId){
    toast.success('Product Added Successful!')
      router.push('/products/manage');
  }else{
    toast.error("Network interface connection to your server failed.");
  }
  setLoading(false);
};

  return (
    <div>
      <Form onSubmit={handleAddProduct} validationBehavior="native" className="flex w-full flex-col gap-6">
        {/* Product Title */}
        <TextField isRequired name="title" className="w-full">
          <Label className="text-sm font-semibold text-gray-700">
            Product Title
          </Label>
          <Input
            placeholder="e.g., Sony WH-1000XM5 Wireless Headphones"
            className="text-black mt-1.5"
          />
          <FieldError className="text-rose-500 text-xs mt-1" />
        </TextField>

        {/* Short Description */}
        <TextField isRequired name="shortDescription" className="w-full">
          <Label className="text-sm font-semibold text-gray-700">
            Short Description
          </Label>
          <Input
            placeholder="A brief punchy summary for the listing card (max 120 chars)"
            className="text-black mt-1.5"
          />
          <FieldError className="text-rose-500 text-xs mt-1" />
        </TextField>

        {/*Full Description */}

        <div className="flex flex-col gap-2">
          <Label htmlFor="fullDescription">
            Full Product Specifications & Overview
          </Label>
          <TextArea
            aria-label="Full Product Specifications & Overview"
            id="fullDescription"
            name="fullDescription"
            placeholder="Provide a detailed breakdown of features, warranty info, box contents, and product condition..."
            className="min-h-[120px] text-black rounded-xl p-3 text-sm focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price */}
          <TextField isRequired name="price" type="number">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              <FaDollarSign className="text-xs text-secondary" /> Price (USD)
            </Label>
            <Input placeholder="499" className="text-black mt-1.5" />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Category */}
          <div className="flex flex-col w-full">
            <Select
              isRequired
              name="category"
              className="w-full text-white"
              placeholder="Select a category"
            >
              <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                Category
              </Label>

              <Select.Trigger className="w-full flex items-center justify-between rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-secondary transition-colors text-left text-black h-[42px]">
                <Select.Value />
                <Select.Indicator className="text-gray-400" />
              </Select.Trigger>

              <Select.Popover className="  rounded-xl shadow-xl z-50 overflow-hidden text-black mt-1">
                <ListBox className="p-1 flex flex-col gap-0.5 outline-none">
                  <ListBox.Item
                    id="tech"
                    textValue="Tech"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-secondary hover:text-white cursor-pointer transition-colors outline-none flex items-center justify-between"
                  >
                    Tech
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="electric"
                    textValue="Electric"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-secondary hover:text-white cursor-pointer transition-colors outline-none flex items-center justify-between"
                  >
                    Electric
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="shoes"
                    textValue="Shoes"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-secondary hover:text-white cursor-pointer transition-colors outline-none flex items-center justify-between"
                  >
                    Shoes
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="clothes"
                    textValue="Clothes"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-secondary hover:text-white cursor-pointer transition-colors outline-none flex items-center justify-between"
                  >
                    Clothes
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="gaming"
                    textValue="Gaming"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-secondary hover:text-white cursor-pointer transition-colors outline-none flex items-center justify-between"
                  >
                    Gaming Tech
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* ৬.Location */}
          <TextField isRequired name="location">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              <FaMapMarkerAlt className="text-xs text-secondary" /> Location
            </Label>
            <Input
              placeholder="e.g., New York, USA"
              className="text-black mt-1.5"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>
        </div>

        {/* ৭.Image ) */}
        <TextField isRequired className="w-full">
          <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mb-2">
            <FaCloudUploadAlt className="text-base text-secondary" /> Product
            Image
          </Label>
          <label
            htmlFor="fileInput"
            className="relative border border-dashed bg-white text-sm w-full border-secondary/60 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-secondary transition rounded-global min-h-[200px] overflow-hidden"
          >
            {imagePreview ? (
              <div className="relative w-full flex flex-col items-center gap-2 group/preview">
                <div className="relative w-32 h-32 rounded-global overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500">
                    Image Loaded Successfully
                  </p>
                  <p className="text-[11px] text-secondary underline mt-1">
                    Click to replace image
                  </p>
                </div>
              </div>
            ) : (
              <>
                <FaCloudUploadAlt className="text-4xl text-secondary animate-pulse" />
                <div className="text-center flex flex-col items-center gap-1">
                  <p className="text-gray-500 font-medium">
                    Drag & drop your product image here
                  </p>
                  <p className="text-gray-400 text-xs">
                    Or{" "}
                    <span className="text-secondary font-semibold underline">
                      click
                    </span>{" "}
                    to browse
                  </p>
                </div>
              </>
            )}

            <input
              id="fileInput"
              name="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAddImage}
            />
          </label>
          <FieldError className="text-rose-500 text-xs mt-1" />
        </TextField>

        {/* সাবমিট বাটন */}
        <Button
          type="submit"
          className="w-full bg-primary text-white font-bold py-6 shadow-md hover:opacity-95 transition-all active:scale-[0.99] mt-4 rounded-global cursor-pointer"
        >
          {
            loading ? "Adding Product" : "Add Product"
          }
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
