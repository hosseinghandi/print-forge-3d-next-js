import React from "react";
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ParamsProps = {
  params: Promise<{
    [x: string]: string;
  }>;
};

export type ChildrenProps = {
  children: React.ReactNode;
};
