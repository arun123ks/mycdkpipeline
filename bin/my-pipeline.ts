import { App } from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/my-pipeline-stack';

const app = new App();
new MyPipelineStack(app, 'MyCdkPipeline');
