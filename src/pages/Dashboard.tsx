import { useState } from "react";
import Header from "../components/Header";
import AcopioList from "../components/AcopioList";
import ReciclajeForm from "../components/ReciclajeForm";

type Props = {
  setPage: (page: string) => void;
};

function Dashboard({ setPage }: Props) {
  const [puntos, setPuntos] = useState(0);

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