import salesgraph from "../assets/sales analysis.png";
import salesProfit from "../assets/salesprofit.svg";
import clientSales from "../assets/clientsales.svg";
export const SalesAnalysis = () => {
  return (
    <div style={{ backgroundColor: "#e3e3df", height: "45rem" }}>
        
        <div  style={{ width: "75rem ", marginLeft: "18rem", padding: "10px" }}>
        <h1 className="text-4xl font-bold mt-10 mb-6">Sales and Profit Analysis</h1>
        <div
        className="flex gap-5 mt-10 "
       
      >
        

        <img
          style={{
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            width: "60rem",
            height: "69vh",
            borderRadius: "20px",
          }}
          src={salesgraph}
        />

        <div className="">

          <img
            className="mt-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
              borderRadius: "20px",
              width: "70rem",
            }}
            src={salesProfit}
            alt=""
          />

          <img
            className="mt-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
              borderRadius: "20px",
              width: "30rem",
            }}
            src={clientSales}
            alt=""
          />
        </div>
      </div>
        </div>
    
    </div>
  );
};
