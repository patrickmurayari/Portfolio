import WorkItem from "./WorkItem"

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details:
            ' The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details:
            ' The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details:
            ' The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details:
            ' The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
    },

]

const Work = () => {
    return (
        <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {
                data.map((item, i) => {
                    return (<WorkItem
                        key={i}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />)
                })
            }
        </div>
    )
}

export default Work