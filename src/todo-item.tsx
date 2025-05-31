interface TodoItemProps {
    id: number,
    title: string
}


const TodoItem = ({ id, title }: TodoItemProps) => {
    return (
        <div className="flex items-center gap-2 ">
            <span className="p-2 rounded-sm border border-slate-50 bg-[aliceblue]">
                {id}
            </span>
            <span className="p-2 rounded-sm border border-slate-50 bg-[aliceblue]">
                {title}
            </span>
        </div>
    )
}

export default TodoItem