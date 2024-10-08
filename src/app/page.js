import Link from "next/link";
import Format from "./components/Format";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
import MyButton from "./components/MyButton";


export default function Home() {
  return (
    <Wrapper>
    <p className="text-3xl text-grass mb-3">Jogadores Disponíveis</p>
    <div className="grid grid-cols-3">
      <Format format={"Artisan"} users={["endbringer#858888", "farofa#991100"]}/>
      <Format format={"True Art"} users={["fighter#009988", "zed#445588"]} />
      <Format format={"Standard"} users={["zezin#994455", "maria#442299"]} />
    </div>
    <MyButton>
      <Link href="cadastrar">Ficar disponível para jogos</Link>
    </MyButton>
    </Wrapper>

  );
}
