import { Suspense, lazy } from "react";

const Hero3DCanvas = lazy(() => import("./Hero3DCanvas"));

const Hero3D = () => {
  return (
    <div className="w-full h-[400px]">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            Loading…
          </div>
        }
      >
        <Hero3DCanvas />
      </Suspense>
    </div>
  );
};

export default Hero3D;
