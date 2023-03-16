// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { metricScope, Unit, StorageResolution } from "aws-embedded-metrics";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const logMetrics = metricScope((metrics) => async () => {
    metrics.setNamespace("AndyTestComputeEMF");
    metrics.putDimensions({ Service: "AndyTest" });
    metrics.putMetric(
      "AMillisecondMetric",
      100,
      Unit.Milliseconds,
      StorageResolution.Standard
    );
    metrics.putMetric(
      "AByteSizeMetric",
      1600424.0,
      Unit.Bytes,
      StorageResolution.High
    );
    console.log("done with metrics");
  });

  await logMetrics();

  res.status(200).json({ name: "John Doe" });
  console.log("response sent");
}
