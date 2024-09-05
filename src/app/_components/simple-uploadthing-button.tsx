"use client";

import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};







import React from 'react'
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SampleUploadButton() {
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      router.refresh()
      toast.dismiss("upload-toast")
    }, onUploadBegin() {
      toast.loading('uploading', { id: "upload-toast" })
    }
  })
  const router = useRouter()
  return (
    <div>

      <label htmlFor="uploadThings">
        <div>
          U
        </div>

      </label>
      <input id="uploadThings" className="sr-only" type="file" {...inputProps} />

    </div>


  )

}

