"use client";

import ButtonCreate from "@/components/mine/buttonCreate";
import ButtonDelete from "@/components/mine/buttonDelete";
import ButtonGet from "@/components/mine/buttonGet";
import ButtonUpdate from "@/components/mine/buttonUpdate";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      {showAlert && (
        <div className="absolute top-2 right-2">
          <Alert>
            <BadgeCheck className="h-4 w-4" />
            <AlertTitle>Sucess!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        </div>
      )}

      <section className="flex gap-4">
        <ButtonCreate setMessage={setMessage} showAlert={setShowAlert} />
        <ButtonGet />
        <ButtonUpdate />
        <ButtonDelete setMessage={setMessage} showAlert={setShowAlert} />
      </section>
    </main>
  );
}
