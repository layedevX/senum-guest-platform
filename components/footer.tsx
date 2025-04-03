"use client";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { FC, useState, FormEvent, Fragment, ChangeEvent } from "react";
import Image from "next/image";

const translate = (arg: Record<string, string>) => arg["en"];

export default function Footer() {
  return (
    <div className="relative footer">
      <div className="bg-black/90 absolute left-0 right-0 top-0 bottom-0 -z-10"></div>
      <div className="flex flex-col gap-y-[50px] lg:flex-row justify-center lg:gap-x-[100px] md:gap-x-[70px] p-[20px]">
        <div className="max-w-[300px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">
            {translate({ en: "Subscribe", fr: "S'abonner" })}
          </p>
          <Subscribe />
        </div>
        <div className="max-w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">
            {translate({ en: "Company", fr: "Compagnie" })}
          </p>
          <FooterLink
            href="https://www.accel-tech.net"
            title={translate({ en: "About", fr: "A-propos" })}
          />
          <FooterLink
            href="https://www.accel-tech.net"
            title={translate({ en: "Services", fr: "Services" })}
          />
          <FooterLink
            href="https://www.accel-tech.net"
            title={translate({ en: "News", fr: "Nouvelles" })}
          />
          <FooterLink
            href="https://www.accel-tech.net"
            title={translate({ en: "Contact", fr: "Contact" })}
          />
        </div>
        <div className="max-w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">Info</p>
          <p className="text-white">
            <span className="font-semibold">
              {translate({ en: "Address ", fr: "Adresse " })}{" "}
            </span>
            {"165 virage, Rte de l'Aeroport, Dakar, Senegal"}
          </p>
          <p className="text-white">
            <span className="font-semibold">
              {translate({ en: "Phone ", fr: "Telephone " })}{" "}
            </span>
            +221 33 820 83 83
          </p>
        </div>
        <div className="max-w-[250px] flex flex-col gap-y-2 text-center justify-center">
          <Image alt="heritage-logo" src="/primary.svg" width={250} height={70} />
          <p className="text-white text-sm">
            &copy; 2025 Heritage Africa. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

const Subscribe: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [fields, setFields] = useState({ email: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setLoading(true);
    fetch("/api/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields)
    })
      .then(console.log)
      .catch(console.error)
      .finally(() => {
        setLoading(false);
        setSubscribed(true);
      });
  }

  return (
    <div className="flex flex-col justify-center gap-y-2 relative">
      {!subscribed ? (
        <Fragment>
          <p className="text-gray-100">
            {translate({
              en: "Stay up to date on the Heritage Project.",
              fr: "Restez à jour sur le Projet Héritage."
            })}
          </p>
          <form className="flex gap-x-1 w-full" onSubmit={handleSubmit}>
            <Input
              variant="dark"
              value={fields.email}
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFields({ ...fields, email: e.target.value })
              }
              placeholder="example@email.com"
              required
            />
            <Button
              label={translate({ en: "Subscribe", fr: "S'abonner" })}
              isLoading={isLoading}
            />
          </form>
        </Fragment>
      ) : (
        <p className="text-gray-100">
          {translate({
            en: "Thanks for subcribing to the Heritage Project.",
            fr: "Merci de vous être abonné au Projet Héritage."
          })}
        </p>
      )}
    </div>
  );
};

function FooterLink(props: { title: string; href?: string }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg text-gray-100 hover:text-white cursor-pointer">
      {props.title}
    </a>
  );
}
