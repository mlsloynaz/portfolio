export default function ProjectDetails() {
    return (
        <div className="flex flex-col mt-32 p-4 md:px-28">
             <p className="text-3xl bg-stone-200 rounded-lg p-4 text-slate-900">title</p>
            <div className="flex flex-col md:flex-row md:justify-center py-8 gap-4 h-96">
                <div className="flex flex-col w-60 md:w-96 px-4 justify-between">
                    <p className="text-l pb-8" >Description</p>
                    <div className="text-l">
                        <p>Year: <span>1222</span></p>
                        <p>Company: <span className="bg-black w-8 h-8"></span><span>Shopify</span></p>
                    </div>
                </div>
                <div className="w-60 md:w-96 relative">
                    Image
                </div>
            </div>
            <div className="flex flex-col p-4 bg-stone-200 text-slate-900 rounded-lg">
                <p className="text-3xl pb-8">Tech stack</p>
                <div className="grid">images</div>
            </div>
        </div>
    )
}