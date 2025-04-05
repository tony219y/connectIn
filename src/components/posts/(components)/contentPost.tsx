interface contentData{
    title : string
    content : string
}

export const ContentPost = ({title, content}:contentData) => {
  return (
    <div className="flex flex-col px-4 text-white h-full"> 
            <h1 className="font-medium text-lg">{title}</h1>
            <p>{content}</p>
    </div>
  )
}