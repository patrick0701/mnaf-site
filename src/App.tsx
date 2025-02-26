import React from 'react';
import { Github, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Multimodal Neural Acoustic Fields for Immersive Mixed Reality</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-600 mb-6">
          <a href="#" className="hover:text-black">Patrick (Guansen) Tong*</a>
          <a href="#" className="hover:text-black">Johnathan Chi-Ho Leung*</a>
          <a href="#" className="hover:text-black">Xi Peng</a>
          <a href="#" className="hover:text-black">Haosheng Shi</a>
          <a href="#" className="hover:text-black">Liujie Zheng</a>
          <a href="#" className="hover:text-black">Shengze Wang</a>
          <a href="#" className="hover:text-black">Arryn Carlos O'Brien</a>
          <a href="#" className="hover:text-black">Ashley Paula-Ann Neall</a>
          <a href="#" className="hover:text-black">Grace Fei</a>
          <a href="#" className="hover:text-black">Martim Gaspar</a>
          <a href="#" className="hover:text-black">Praneeth Chakravarthula</a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" 
             className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-not-allowed opacity-75">
            <Github className="w-5 h-5" />
            <span>Code (Coming Soon)</span>
          </a>
          <a href="https://www.cs.unc.edu/~cpk/data/papers/Neural_acoustic_fields.pdf" 
             className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
            <FileText className="w-5 h-5" />
            <span>Paper</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Teaser Figure */}
        <section className="mb-12">
          <img
            src="src/teaser.png"
            alt="Teaser Figure"
            className="w-full rounded-lg"
          />
        </section>

        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            We introduce multimodal neural acoustic fields for synthesizing spatial sound and enabling the creation of immersive auditory
            experiences from novel viewpoints and in completely unseen new environments, both virtual and real. Extending the concept of neural
            radiance fields to acoustics, we develop a neural network-based model that maps an environment's geometric and visual features to
            its audio characteristics. Specifically, we introduce a novel hybrid transformer-convolutional neural network to accomplish two core
            tasks: capturing the reverberation characteristics of a scene from audio-visual data, and generating spatial sound in an unseen new
            environment from signals recorded at sparse positions and orientations within the original scene. By learning to represent spatial
            acoustics in a given environment, our approach enables creation of realistic immersive auditory experiences, thereby enhancing the
            sense of presence in augmented and virtual reality applications. We validate the proposed approach on both synthetic and real-world
            visual-acoustic data and demonstrate that our method produces nonlinear acoustic effects such as reverberations, and improves spatial
            audio quality compared to existing methods. Furthermore, we also conduct subjective user studies and demonstrate that the proposed
            framework significantly improves audio perception in immersive mixed reality applications.
          </p>
        </section>

        {/* Method Figure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Method</h2>
          <img
            src="src/model_image.jpg"
            alt="Method Overview"
            className="w-full rounded-lg mb-2"
          />
          <p className="text-sm text-gray-600 text-center">
            Overview of our method.Sound propagation can be classified into direct sound emission, early reflections, and
higher-order reflections, also known as reverberations. In our model, we address sound propagation in two stages. First, we model reverberations
based on the room’s consistent acoustic profile, which is determined by its geometry, materials, and other characteristics learned from visual features.
Then, we refine this model by incorporating how direct sounds and early reflections are influenced by the pose of the speaker and listener
          </p>
        </section>

        {/* Citation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Citation</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`@article{tong2023acoustic,
  title={Multimodal Neural Acoustic Fields for Immersive Mixed Reality},
  author={Tong, Guansen and Leung, Johnathan Chi-Ho and Peng, Xi and 
          Shi, Haosheng and Zheng, Liujie and Wang, Shengze and 
          O'Brien, Arryn Carlos and Neall, Ashley Paula-Ann and 
          Fei, Grace and Gaspar, Martim and Chakravarthula, Praneeth},
  journal={TVCG},
  year={2025}
}`}
          </pre>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>This website is licensed under a <a href="#" className="text-blue-600 hover:underline">Creative Commons Attribution-ShareAlike 4.0 International License</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;