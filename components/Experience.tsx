import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import Modal from './Modal';
import { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  // SVG Data URIs for icons
  const databaseIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxlbGxpcHNlIGN4PSIxMiIgY3k9IjUiIHJ4PSI5IiByeT0iMyI+PC9lbGxpcHNlPjxwYXRoIGQ9Ik0yMSAxMmMwIDEuNjYtNCAzLTkgM3MtOS0xLjM0LTktMyI+PC9wYXRoPjxwYXRoIGQ9Ik0zIDV2MTRjMCAxLjY2IDQgMyA5IDNzOS0xLjM0IDktM1Y1Ij48L3BhdGg+PC9zdmc+";
  
  const zjuIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNTAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSI0MCIgZmlsbD0id2hpdGUiPlpKVTwvdGV4dD48L3N2Zz4=";

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "快手 (Kuaishou)",
      role: "电商商品治理-风险策略开发",
      date: "2024.6 - 至今",
      location: "北京 (线下)",
      description: "针对电商爆品退货率高的问题，构建风险监控体系。负责数据指标逻辑定义与大数据处理，有效量化业务风险。",
      details: [
        "业务背景：针对商品治理核心指标——14天商品退货率，针对爆品商品异常事件建立识别思路，形成每日更新的监控体系。",
        "指标构建：剔除结构性波动影响，兼容多种数据口径。定义计算逻辑（7/14/30天风险天数、品退量求和、加权处罚覆盖率）。",
        "数据工程：在数据平台创建回流例行任务，产出底表支持自由添加数据漏斗，根据业务变化灵活调整。",
        "产出效果：量化组内专项行动建立标准，为各行业负责人量化了时间累计风险和策略命中情况。"
      ],
      tags: ["Risk Strategy", "Big Data", "SQL", "Monitoring Systems"],
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      textColor: "text-white",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Kuaishou_logo.svg",
      logoClassName: "brightness-0 invert"
    },
    {
      id: 2,
      company: "DolphinDB Inc",
      role: "数据分析师",
      date: "2022.5 - 2022.9",
      location: "杭州 (线下)",
      description: "在时序数据库公司协助金融客户优化订单系统，利用分布式数据库进行量化交易编程，提升计算性能。",
      details: [
        "电商客户需求对接：独立帮助客户建立电商平台订单系统，讨论需求与改进方案10余次，成果直接投入生产使用。",
        "量化交易编程：使用分布式时序数据库向量化编程，计算高频因子（返回矩阵、模拟股票市场竞价）。",
        "性能优化：掌握GB级金融行情数据高效存储与读取，通过优化分区策略将计算性能提升千倍。",
        "技能掌握：熟练使用分布式时序数据库，优化读写性能。"
      ],
      tags: ["Time-series DB", "Quantitative Trading", "Performance Optimization", "Distributed Systems"],
      bgColor: "bg-blue-600", 
      textColor: "text-white",
      logo: databaseIcon,
      logoClassName: "w-16 h-16" // Adjusted size for icon consistency
    },
    {
      id: 3,
      company: "浙江大学 (ZJU)",
      role: "光伏支架抗风可靠性研究",
      date: "2022.03 - 2023.01",
      location: "杭州",
      description: "针对100MW农光互补及2GW海上光伏项目，开展现场模态实测与风洞试验，深入分析风致破坏原因。",
      details: [
        "现场实测：选取山东沂源100MW项目开展模态实测，获得宝贵数据。",
        "风洞试验：对中核田湾2GW超大型海上光伏阵列进行测压试验，获得风压分布与风振响应规律。",
        "灾害分析：深入分析台风'摩羯'造成新能源结构破坏的原因及优化方法。"
      ],
      tags: ["Structural Engineering", "Wind Tunnel", "Data Analysis", "Research"],
      bgColor: "bg-indigo-800", 
      textColor: "text-white",
      logo: zjuIcon,
      logoClassName: "w-20" // "ZJU" text logo
    },
    {
      id: 4,
      company: "Fintech 机器学习项目",
      role: "机器学习算法研究负责人",
      date: "2024.3 - 2024.4",
      description: "基于用户画像预测客户接触渠道。解决严重样本不均衡问题，对比多种模型，最终XGBoost达到最高精度。",
      details: [
        "问题定义：协助客户经理有效联系客户，基于用户画像预测接触渠道。",
        "数据处理：处理50万条记录，解决严重的样本不均衡（信用正常 >> 欺诈）。采用重采样平衡标签，调整Loss Function权重。",
        "模型训练：对比Random Forest, MLP, LightGBM, CatBoost, XGBoost。",
        "结果：XGBoost配合网格搜索超参数寻优表现最优，精度达到0.1999（最高0.22）。"
      ],
      tags: ["Machine Learning", "XGBoost", "Imbalanced Data", "Fintech"],
      bgColor: "bg-slate-800", 
      textColor: "text-white",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      logoClassName: "brightness-0 invert"
    }
  ];

  return (
    <section id="experience" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              实战经历
            </h2>
            <p className="text-slate-500 max-w-2xl">
              从互联网大厂的风险策略开发，到科研一线的结构工程研究，再到金融科技的算法落地。
              <br className="hidden md:block" />
              点击下方卡片查看详细的项目细节与技术方案。
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(item => (
            <ExperienceCard 
              key={item.id} 
              item={item} 
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        item={selectedItem} 
      />
    </section>
  );
};

export default Experience;