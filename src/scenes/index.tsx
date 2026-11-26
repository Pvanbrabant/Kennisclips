import React from "react";
import type { Scene } from "../schema";
import { BronnenScene } from "./BronnenScene";
import { CitaatScene } from "./CitaatScene";
import { KernbegripScene } from "./KernbegripScene";
import { OpsommingScene } from "./OpsommingScene";
import { ReflectieScene } from "./ReflectieScene";
import { SamenvattingScene } from "./SamenvattingScene";
import { StappenScene } from "./StappenScene";
import { TitelScene } from "./TitelScene";
import { VergelijkingScene } from "./VergelijkingScene";
import { VoorbeeldScene } from "./VoorbeeldScene";
import { VraagScene } from "./VraagScene";

/** Kiest het juiste scènecomponent op basis van `scene.type`. */
export const SceneRenderer: React.FC<{ scene: Scene }> = ({ scene }) => {
  switch (scene.type) {
    case "titel":
      return <TitelScene scene={scene} />;
    case "vraag":
      return <VraagScene scene={scene} />;
    case "kernbegrip":
      return <KernbegripScene scene={scene} />;
    case "opsomming":
      return <OpsommingScene scene={scene} />;
    case "vergelijking":
      return <VergelijkingScene scene={scene} />;
    case "stappen":
      return <StappenScene scene={scene} />;
    case "citaat":
      return <CitaatScene scene={scene} />;
    case "voorbeeld":
      return <VoorbeeldScene scene={scene} />;
    case "samenvatting":
      return <SamenvattingScene scene={scene} />;
    case "reflectie":
      return <ReflectieScene scene={scene} />;
    case "bronnen":
      return <BronnenScene scene={scene} />;
  }
};
