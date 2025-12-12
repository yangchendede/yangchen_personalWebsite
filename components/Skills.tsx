import React from 'react';
import { Award, Book, Code, Trophy } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Education */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <Book className="w-5 h-5 text-blue-600" />
              教育背景
            </h3>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-slate-200">
                <div className="text-slate-900 font-semibold">浙江大学 (ZJU)</div>
                <div className="text-sm text-slate-500">硕士 | 结构工程</div>
                <div className="text-sm text-slate-400">2022.8 - 2025.6 </div>
              </div>
              <div className="pl-4 border-l-2 border-slate-200">
                <div className="text-slate-900 font-semibold">慕尼黑工业大学 (TUM)</div>
                <div className="text-sm text-slate-500">交换生 | 数学信息学院</div>
                <div className="text-sm text-slate-400">2023.10 - 2024.3</div>
              </div>
              <div className="pl-4 border-l-2 border-slate-200">
                <div className="text-slate-900 font-semibold">浙江大学 (ZJU)</div>
                <div className="text-sm text-slate-500">本科 | 水利水电工程 (绩点 3.84/4.0)</div>
                <div className="text-sm text-slate-400">2018.8 - 2022.6</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <Code className="w-5 h-5 text-purple-600" />
              技能清单
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">编程语言</div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'HiveSQL', 'MATLAB'].map(s => (
                    <span key={s} className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-600 border border-slate-200">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">语言能力</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-600">英语 (CET-6 511 / TOEFL 86)</span>
                  <span className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-600">德语 (A1)</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">其他</div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  Excel 高级函数, PPT 制作, 网球 (3.0), 游泳 (2km)
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <Trophy className="w-5 h-5 text-yellow-500" />
              荣誉奖项
            </h3>
            <ul className="space-y-3">
              {[
                "浙江大学一等奖学金 (前3%)",
                "浙江大学优秀研究生",
                "浙大建筑设计研究院奖学金一等奖",
                "美国大学生数学建模大赛 Honorable Mention",
                "中国大学生数学竞赛一等奖"
              ].map((award, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;