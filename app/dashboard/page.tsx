"use client";
import React from "react";
import useBackend from "../../hooks/useBackend";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { getUserAuth } from "@actions/user";

type Props = {};

const page = (props: Props) => {
  const { data, isLoading } = getUserAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-800">
      page
      <div>{JSON.stringify(data)}</div>
      <button
        onClick={() => {
          redirect("/dashboard/example");
        }}
      >
        navigation
      </button>
    </div>
  );
};

export default page;
