import reactIcon from "../../assets/images/skills/react.png";
import vueIcon from '../../assets/images/skills/vue.png';
import awsIcon from '../../assets/images/skills/aws.png';
import dockerIcon from '../../assets/images/skills/docker.png';
import bootstrapIcon from "../../assets/images/skills/bootstrap.png";
import solidityIcon from '../../assets/images/skills/solidity.png';
import sqlIcon from "../../assets/images/skills/db.png";
import pythonIcon from '../../assets/images/skills/python.png';
import csharpIcon from "../../assets/images/skills/csharp.png";
import dotnetIcon from '../../assets/images/skills/dotnet.png';

import androidIcon from "../../assets/images/skills/android.png";
import kotlinIcon from "../../assets/images/skills/kotlin.png";
import flutterIcon from '../../assets/images/skills/flutter.png';
import reactnativeIcon from '../../assets/images/skills/reactnative.png';

import llmIcon from "../../assets/images/skills/llm.png";
import openCVIcon from "../../assets/images/skills/opencv.png";
import tfIcon from '../../assets/images/skills/tensorflow.png';

export const skillCat = {
  web: {
    categoryName: 'Web Dev',
    percentage: 50,
    skillList: [
      { name: 'React js', xp: '7 YRS', icon: reactIcon },
      { name: 'Vue js', xp: '5 YRS', icon: vueIcon },
      { name: 'AWS', xp: '4 YRS', icon: awsIcon },
      { name: 'Bootstrap', xp: '6 YRS', icon: bootstrapIcon },
      { name: 'SQL', xp: '7 YRS', icon: sqlIcon },
      { name: 'Docker', xp: '5 YRS', icon: dockerIcon },
      { name: 'Python', xp: '5 YRS', icon: pythonIcon },
      { name: 'Solidity', xp: '5 YRS', icon: solidityIcon },
      { name: 'C#', xp: '4 YRS', icon: csharpIcon },
      { name: 'Dotnet', xp: '4 YRS', icon: dotnetIcon }
    ]
  },
  game: {
    categoryName: 'Mobile Dev',
    percentage: 30,
    skillList: [
      { name: 'Android', xp: '5 YRS', icon: androidIcon },
      { name: 'Kotlin', xp: '5 YRS', icon: kotlinIcon },
      { name: 'React Native', xp: '4 YRS', icon: reactnativeIcon },
      { name: 'Flutter', xp: '3 YRS', icon: flutterIcon }
    ]
  },
  design: {
    categoryName: 'AI Engieer',
    percentage: 20,
    skillList: [
      { name: 'LLM', xp: '4 YRS', icon: llmIcon },
      { name: 'openCV', xp: '3 YRS', icon: openCVIcon },
      { name: 'TensorFlow', xp: '3 YRS', icon: tfIcon }
    ]
  },
  soft: {
    categoryName: [
      'Creative',
      'Perseverant',
      'Patient',
      'Enthusiastic',
      'Hardworking',
      'Amusing'
    ],
    percentage: 100
  }
};
