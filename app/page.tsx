import Carousel from "./components/Carousel";
import Services from "./components/Services";
import VoiceOfferings from "./components/VoiceOfferings";
import Ticker from "./components/Ticker";
import TickerImages from "./components/TickerImages";
import CliVoiceTerminationSpecialComponent from "./components/CLISpecialComponent";
import BusinessServices from "./components/BusinessServices";
import BuisinessAnalitics from "./components/BuisinessAnalitics";
import FAQ from "./faq/page";

const cardDataCLI = [
  {
    id: 1,
    title: "Card 1",
    content: { key1: "Name", value1: "John", key2: "Age", value2: "28" },
  },
  {
    id: 2,
    title: "Card 2",
    content: { key1: "Name", value1: "Alice", key2: "Age", value2: "34" },
  },
  {
    id: 3,
    title: "Card 3",
    content: { key1: "Name", value1: "Bob", key2: "Age", value2: "45" },
  },
  {
    id: 4,
    title: "Card 4",
    content: { key1: "Name", value1: "Emma", key2: "Age", value2: "23" },
  },
  {
    id: 5,
    title: "Card 5",
    content: { key1: "Name", value1: "Olivia", key2: "Age", value2: "30" },
  },
];

const imageUrls = [
  "/flags/Austrelia.png",
  "/flags/Canada.png",
  "/flags/China.png",
  "/flags/Cuba.png",
  "/flags/France.png",
  "/flags/Germany.png",
  "/flags/Hongkong.png",
  "/flags/Italy.png",
  "/flags/Malesiya.png",
  "/flags/New-Zealand.png",
  "/flags/Singapur.png",
  "/flags/Spain.png",
];




export default function HomePage() {
  return (
    <div>
      <Carousel />
      <Ticker cards={cardDataCLI} />
      <VoiceOfferings />
      <Services />
      <BuisinessAnalitics/>
      <CliVoiceTerminationSpecialComponent/>
      <BusinessServices/>
      <TickerImages images={imageUrls} />
      <FAQ/>
    </div>
  );
}
