import { Album } from "@/hooks/useGetTopAlbums.model";
import Image from "next/image";
const GalerryItem = ({ item }: { item: Album }): JSX.Element => {
  return (
    <div className={`bg-slate-200 bg-[url('${item.image[0]["#text"]}')] h-[10rem] relative`}>
      <Image
        src={item.image[2]["#text"] || "/background/wallpaper.jpg"}
        className="object-cover w-full h-full"
        width={200}
        height={300}
        alt="album image"
      />

      <div>

      </div>
    </div>
  );
};

export default GalerryItem;
