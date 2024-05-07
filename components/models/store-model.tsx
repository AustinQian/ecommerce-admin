"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { useStoreModel } from "@/hooks/use-store-model";
import { Model } from "@/components/ui/model";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name:z.string().min(1),
});

export const Storemodel = ()=>{
    const storeModel = useStoreModel();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values);
        //TODO: create store 
    }

    return (
        <Model 
         title="Create store"
         description="Add a new store to manage products and categories"
         isOpen={storeModel.isOpen}
         onClose={storeModel.onClose}
        >
            <div>
              <div className="space-y-4 py-2 pb-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField 
                          control={form.control}
                          name="name"
                          render={({field})=>(
                            <FormItem>
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input placeholder="E-commerce" {...field} /> 
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                            <Button 
                              variant="outline" 
                              onClick={storeModel.onClose}>
                                Cancel
                            </Button>

                            <Button type="submit">Continue</Button>
                        </div>
                    </form>
                </Form>
              </div>
            </div>
        </Model>
    );
};