import type { MetaFunction } from "@remix-run/cloudflare";
import { LocationMarker } from "~/components/markers/location-marker";
import { LZMarker } from "~/components/markers/lz-marker";
import { ObjectiveMarker } from "~/components/markers/objective-marker";
import Map from "~/components/map/Map";
import { Locations } from "~/data/locations";
import { LZs } from "~/data/lzs";
import { Tasks } from "~/data/tasks";
import { Popup } from "~/components/map/Popup";
import { AppSidebarTrigger } from "~/components/sidebar/app-sidebar-trigger";
import { useSidebar } from "~/components/ui/sidebar";

export const meta: MetaFunction = () => {
  return [
    { title: "Gray Zone Warfare Map" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { isMobile } = useSidebar()

  return (
    <div className="relative flex w-full items-center justify-center">
      <Map />
      <Popup />
      {Tasks.map((task) => task.objectives.map((objective) => (
        <ObjectiveMarker key={objective.id} task={task} objective={objective} />
      )))}
      {LZs.map((lz) => (
        <LZMarker key={lz.id} lz={lz} />
      ))}
      {Locations.map((location) => (
        <LocationMarker key={location.id} location={location} />
      ))}
      {isMobile && (
        <div className="absolute top-0 left-0">
          <AppSidebarTrigger />
        </div>
      )}
    </div>
  );
}
