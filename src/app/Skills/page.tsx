export default async function Skills() {
  await new Promise ((resolve) =>{
    setTimeout (resolve,7000)
    });
    return (
      <div>
        <h1 className="text-red-500 font-extrabold flex justify-center py-3 px-3 bg-green-400">Skills</h1>
        <br/>
        <div className="text-orange-500 font-semibold">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Learing Next.js and tailwind Css</li>
          </ul>

        </div>
      </div>

    
    )
}