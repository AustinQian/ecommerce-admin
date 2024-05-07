"use client";

import { useEffect } from "react";

import { useStoreModel } from "@/hooks/use-store-model";

const SetupPage = () => {

  //the below line can be replaced by "const storeModel = useStoreModel()" does not work fine when in useEffect
  const onOpen = useStoreModel((state)=>state.onOpen);
  const isOpen = useStoreModel((state)=>state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);

    return (
      <div className="p-5">
        Root page
      </div>
    );
  }

  export default SetupPage;
  