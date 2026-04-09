
import Header from "../components/Header";
import AcopioList from "../components/AcopioList";
import ReciclajeForm from "../components/ReciclajeForm";

type Props = {
  setPage: (page: string) => void;
  puntos: number;
  setPuntos: (puntos: number) => void;
};

function Dashboard({ setPage, puntos, setPuntos }: Props) {

  return (
    <div>
      <Header puntos={puntos} setPage={setPage} />

      <div className="p-6 space-y-6">
        <AcopioList />
        <ReciclajeForm setPuntos={setPuntos} puntos={puntos} />
      </div>
    </div>
  );
}

export default Dashboard;