import { GetStaticProps, InferGetStaticPropsType } from "next";

import { createSwaggerSpec } from "next-swagger-doc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDoc = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <SwaggerUI spec={spec} />;
};

ApiDoc.displayName = "NoLayout";

export const getStaticProps: GetStaticProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spec: Record<string, any> = createSwaggerSpec({
    title: "NextJS Swagger",
    version: "0.0.0",
  });
  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
