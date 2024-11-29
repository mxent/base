import Button from '@/components/button';
import Input from '@/components/input';

const IndexPage = () => {
    return (
        <>
            <div className="p-3">
                <h1 className="mb-3 text-2xl font-bold">Components</h1>
                <p>Here are the list of components you can use from this module.</p>

                {/* Inputs */}
                <section className="my-5">
                    <div className="mb-3 text-lg font-medium">Inputs</div>
                    <Input variantSize="medium" placeholder="Enter something" required />
                    <code className="mt-3 block rounded-md bg-gray-100 p-3 text-sm">
                        &lt;Input variantSize="medium" placeholder="Enter something" required /&gt;
                    </code>
                </section>

                {/* Buttons */}
                <section className="my-5">
                    <div className="mb-3 text-lg font-medium">Buttons</div>
                    <Button variantType="primary" variantSize="medium">
                        Primary Button
                    </Button>
                    <code className="mt-3 block rounded-md bg-gray-100 p-3 text-sm">
                        &lt;Button variantType="primary" variantSize="medium"&gt;Primary
                        Button&lt;/Button&gt;
                    </code>
                </section>
            </div>
        </>
    );
};

export default IndexPage;
