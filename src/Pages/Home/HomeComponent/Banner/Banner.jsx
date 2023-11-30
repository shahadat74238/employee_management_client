
const Banner = () => {
   return (
      <div className="h-[60vh] w-full md:h-screen bg-[url('https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
         <div className="h-full w-full bg-black/60 flex justify-center item-center ">
            <div className="h-full text-white">
               <p className="text-xl font-semibold text-center">--- Best ---</p>
               <h1 className="text-4xl font-bold text-center">Employee Management</h1>
            </div>
         </div>
         
      </div>
   );
};

export default Banner;