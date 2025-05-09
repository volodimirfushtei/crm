export default function Hero() {
    return (
        <section id="home" className="relative bg-gradient-to-br from-[#EFFBDB] to-white overflow-hidden pt-20">
            <div className="container mx-auto px-6 py-24">
                <div className="flex items-center">
                    <div className="w-1/2 pr-12">
                        <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Transform Your Business with Smart Analytics
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Unlock powerful insights and drive growth with our comprehensive business intelligence
                            platform.
                            Make data-driven decisions with confidence.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#trial"
                               className="bg-primary text-white px-8 py-4 rounded-button font-medium hover:bg-primary/90 transition-colors">
                                Start Free Trial
                            </a>
                            <a href="#demo" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg">
                                    <i className="ri-play-fill text-primary text-2xl"></i>
                                </div>
                                <span className="font-medium">Watch Demo</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://readdy.ai/api/search-image?query=modern%2520business%2520analytics%2520dashboard%2520with%2520charts%2520and%2520graphs%252C%2520clean%2520design%252C%2520professional%2520interface%252C%2520light%2520theme%252C%2520high%2520quality%2520render&width=600&height=400&seq=1&orientation=landscape"
                            alt="Analytics Dashboard"
                            className="w-full rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}